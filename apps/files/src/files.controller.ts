import { Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { FilesService } from './files.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('files')
@Controller()
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @ApiOkResponse({ description: 'Upload file' })
  @Post('upload')
  upload(): string {
    return 'upload';
  }

  @ApiOkResponse({ description: 'Download file' })
  @Get(':id/download')
  download(@Param('id') id: string): string {
    return id;
  }

  @ApiOkResponse({ description: 'Delete file' })
  @Delete(':id')
  delete(@Param('id') id: string): string {
    return 'delete' + id;
  }

  @ApiOkResponse({ description: 'Get file' })
  @Get(':id')
  get(@Param('id') id: string): string {
    return 'id ' + id;
  }
}
