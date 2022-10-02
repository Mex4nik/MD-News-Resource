import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentsService } from './comments.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('comments')
export class CommentsController {
  constructor(private commentService: CommentsService) {}

  @Get(':id')
  getOne(@Param() params) {
    return this.commentService.getOneById(params.id);
  }

  @Get()
  getAll() {
    return this.commentService.getAll();
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  createComment(@Body() dto: CreateCommentDto) {
    return this.commentService.create(dto);
  }
}
