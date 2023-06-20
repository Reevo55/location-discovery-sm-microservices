import { Body, Controller, Delete, Get, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { FilesService } from './files.service';

@ApiTags('files')
@Controller('files')
export class FilesController {
  constructor(private readonly fileService: FilesService) {}

  @ApiOkResponse()
  @ApiCreatedResponse()
  @ApiTags('files')
  @Get()
  async getSignedUrl(@Query('contentType') contentType: string) {
    return await this.fileService.getSignedUrl(contentType || 'video/mov');
  }

  @ApiOkResponse()
  @ApiTags('files')
  @Delete()
  async deleteFileFromS3(@Body() body: { image: string }) {
    return await this.fileService.deleteFileFromS3(body.image);
  }
}
