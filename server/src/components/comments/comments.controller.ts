import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentsService } from './comments.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('comments')
export class CommentsController {
  constructor(private commentService: CommentsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  createComment(@Body() dto: CreateCommentDto) {
    return this.commentService.create(dto);
  }
}
