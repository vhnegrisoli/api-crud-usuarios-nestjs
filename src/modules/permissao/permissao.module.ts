import { Module } from '@nestjs/common';
import { PermissaoServiceService } from './permissao-service/permissao-service.service';

@Module({
  providers: [PermissaoServiceService]
})
export class PermissaoModule {}
