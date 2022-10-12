import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCommentDto } from './dto/create-comment.dto';
import { FilesService } from '../files/files.service';
import { Comment } from './comments.model';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment) private commentRepository: typeof Comment,
  ) {}

  async getOneById(id) {
    const comment = await this.commentRepository.findByPk(id);
    if (!comment) return { message: "Comment isn't exist" };
    return comment;
  }

  async getAll() {
    const comments = await this.commentRepository.findAll({
      order: [['updatedAt', 'DESC']],
      include: { all: true },
    });
    return comments;
  }

  async getCommentsFromOneArticle(id) {
    const comments = await this.commentRepository.findAll({
      where: { articleId: id },
      order: [['updatedAt', 'DESC']],
      include: { all: true },
    });
    return comments;
  }

  async create(dto: CreateCommentDto) {
    try {
      const comment = await this.commentRepository.create(dto);
      return comment;
    } catch (error) {
      if (error?.original) {
        const { detail } = error?.original;
        if (detail.includes('userId')) {
          return {
            message: "You can't create comment from user that is not exist",
          };
        } else if (detail.includes('articleId')) {
          return {
            message: "You can't create comment to article that is not exits",
          };
        }
      }

      if (error.message) {
        return {
          message: error.message,
        };
      }
    }
  }
}
