import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from '../../UI/Loader/Loader';
import ArticleService from '../../../API/ArticlesService';
import classes from './OneArticle.module.css'
import { APIHost } from '../../../API/APISettings';
// import { convertDate } from '../../../utils/convertDate';

const OneArticle = () => {
    const params = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [isComLoading, setIsComLoading] = useState(true);
    const [article, setArticle] = useState({});
    const [comments, setComments] = useState([]);

    const fetchArticle = async (id) => {
        const response = await ArticleService.getById(id);
        setArticle(response.data)
        setIsLoading(false)
    }

    const fetchComments = async (id) => {
        const response = await ArticleService.getCommentsByArticleId(id);
        setComments(response.data)
        setIsComLoading(false);
    }

    useEffect(() => {
        fetchArticle(params.id)
        fetchComments(params.id)
    }, [])

    const convertDateToLocal = (initDate) => {
        if (!initDate) return '';
        const date = new Date(initDate);

        const browserLanguage = navigator.language;
        const localDateOptions = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        };

        return date.toLocaleString(browserLanguage, localDateOptions);
    }

    return (
        <div className={classes.wrapper}>
            <h1 className={classes.title}>{article.title}</h1>
            <div className={classes.dateTime}>
                <span>{convertDateToLocal(article.updatedAt)}</span>
            </div>
            {isLoading 
                ? <Loader/>
                : <div className={classes.content}>
                    <div className={classes.content__text}>
                        {article.content}
                    </div> 
                    <img
                        src={`${APIHost}/${article.image}`}
                        alt={article.title}
                        className={classes.image}
                    />
                  </div>
            }
            <h1>Comments: {comments.length}</h1>
            {isComLoading
                ? <Loader/>
                : <div className={classes.comments}>
                    {comments.map((comm) => 
                        <div key={comm.id} className={classes.comment__wrapper}>
                            <div className={classes.comment__wrapper__userdata}>
                                <span className={classes.comment__wrapper__userdata__username}>{comm.author.username}</span>
                                <span className={classes.comment__wrapper__userdata__date}>{convertDateToLocal(comm.updatedAt)}</span>
                            </div>
                            <span className={classes.comment__wrapper__content}>{comm.content}</span>
                        </div>
                    )}
                  </div> 
            }
        </div>
    );
}

export default OneArticle;
