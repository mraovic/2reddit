import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ArticleEntity} from "./article_entity";

@Module({
  imports:[TypeOrmModule.forFeature([ArticleEntity])],
  controllers: [ArticleController],
  providers: [ArticleService]
})
export class ArticleModule {}
