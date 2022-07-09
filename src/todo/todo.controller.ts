import {
  Controller,
  Get,
  Logger,
  Post,
  Param,
  ParseIntPipe,
  Delete,
  Put,
  Body,
} from '@nestjs/common';
import { Todo } from './todo.interface';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  private readonly logger = new Logger(TodoController.name);

  constructor(private readonly todoService: TodoService) {}

  @Get()
  findAll(): Todo[] {
    this.logger.log('Handling findAll() request...');
    return this.todoService.findAll();
  }

  @Post()
  create(@Body() todo: Todo): void {
    this.logger.log(`Handling create(${JSON.stringify(todo)}) request...`);
    return this.todoService.create(todo);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Todo {
    this.logger.log(`Handling findOne(${id}) request...`);
    return this.todoService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, todo: Todo): void {
    this.logger.log(
      `Handling update(${id}, ${JSON.stringify(todo)}) request...`,
    );
    return this.todoService.update(id, todo);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): void {
    this.logger.log(`Handling delete(${id}) request...`);
    return this.todoService.delete(id);
  }
}
