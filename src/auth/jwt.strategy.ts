import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { constants } from 'src/constants';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([(request:Request) => {
        const data = request?.cookies['id-token'];
        if (!data){
          return null;
        }
        
        return data.access_token;
      }]),
      ignoreExpiration: false,
      secretOrKey: constants.JWT.secret,
    });
  }

  async validate(payload: { email: string }) {
    return { email: payload.email };
  }
}