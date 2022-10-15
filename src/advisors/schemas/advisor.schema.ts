import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type AdvisorsDocument = Advisors & Document;

@Schema({ timestamps: true })
export class Advisors {
  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    required: true,
  })
  last_name: string;

  @Prop({
    required: true,
    maxlength: 1,
  })
  gender: string;

  @Prop({
    required: true,
    unique: true,
  })
  email: string;

  @Prop({
    required: true,
  })
  phone: string;

  @Prop({
    required: true,
  })
  country: string;

  @Prop({
    required: true,
  })
  lat: string;

  @Prop({
    required: true,
  })
  lng: string;

  @Prop({
    required: true,
  })
  password: string;
}

export const AdvisorsSchema = SchemaFactory.createForClass(Advisors);
