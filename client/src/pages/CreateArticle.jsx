import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ArticleService from '../API/ArticlesService'
import Button from '../components/UI/Button/Button'
import Input from '../components/UI/Input/Input'
import Select from '../components/UI/Select/Select'
import Textarea from '../components/UI/Textarea/Textarea'
import classes from './../components/CreateArticle/CreateArticle.module.css'

const CreateArticle = () => {
    const [categories, setCategories] = useState([]);

    const prepareCategories = async () => {
        const response = await ArticleService.getAllCategories();
        const allCategories = response.data.map(cat => {
            return {
                name: cat.name,
                value: cat.id
            }
        })
        setCategories(allCategories)
    }

    useEffect(() => {
        prepareCategories();
    }, [])

    const submitArticle = async (event) => {
        event.preventDefault();

        const body = {
            title: event.target[0].value,
            content: event.target[1].value,
            categoryId: +event.target[2].value,
            userId: 7,
            image: event.target[3].files[0]
        }

        // unfinished
        debugger;
        const token = localStorage.getItem('auth')  
        console.log(body)
        const response = await ArticleService.createArticle(token, body);
        console.log(response);

        // Test
        // const reader = new FileReader();
        // const files = event.target[3].files[0];
        // reader.readAsDataURL(files);

        // reader.onload = async (event) => {
        //     debugger;
        //     const image = event.target.result;
        //     body.image = image;

        //     const token = localStorage.getItem('auth')  
        //     console.log(body)
        //     const response = await ArticleService.createArticle(token, body);
        //     console.log(response);

        // }
    }

  return (
    <div className={classes.wrapper}>
        <h1 className={classes.title}>New Article</h1>
        <form onSubmit={submitArticle}>
            <Input type="text" label="Title" id="title-input" />
            <Textarea type="text" label="Content" id="content-textarea" />
            <Select mainLabel='Category' label='Category' selectedValue='' selectedName='None' options={categories} />
            <Input type="file" label="Image" id="image-input" />
            <div className={classes.controls}>
                <Button>Create</Button>
            </div>
        </form>
    </div>
  )
}

export default CreateArticle