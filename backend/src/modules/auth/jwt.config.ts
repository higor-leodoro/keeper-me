import { ConfigService } from '@nestjs/config';

const jwtConfig = {
  global: true,
  imports: [],
  useFactory: async (consfigService: ConfigService) => ({
    secret: consfigService.get<string>('JWT_SECRET'),
    signOptions: {
      expiresIn: +consfigService.get<number>('JWT_EXPIRATION_TIME'),
    },
  }),
  inject: [ConfigService],
};

export default jwtConfig;
