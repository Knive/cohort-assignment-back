import { Module } from '@nestjs/common';
import { MerchantsService } from './merchants.service';
import { MerchantsController } from './merchants.controller';
import { CampaignsModule } from 'src/campaigns/campaigns.module';

@Module({
  controllers: [MerchantsController],
  providers: [MerchantsService],
  exports: [MerchantsService],
  imports: [CampaignsModule]
})
export class MerchantsModule {}
