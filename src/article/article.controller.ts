import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {CreateArticleDto} from "./create-article.dto";
import {ArticleService} from "./article.service";
import {ArticleEntity} from "./article_entity";

@Controller('articles')
export class ArticleController {
    constructor(private articleService: ArticleService){

    }
    @Post()
    createArticle(@Body() createArticle:CreateArticleDto):Promise<ArticleEntity>{
        return this.articleService.create(createArticle);
    }
    @Get()
    readAllArticle():Promise<ArticleEntity[]>{
    return this.articleService.readAll();
    }
    @Put()
    updateArticle(){

    }
    @Delete(':id')
    deleteArticle(@Param('id') id:number){
        this.articleService.delete(id);
    }

}
