import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { PeopleResolver } from './people/people.resolver';
import { GqlDirectoryPeopleCqrsModule } from '@aplus/gql-directory/people/cqrs';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: false,
      autoSchemaFile: true,
    }),
    GqlDirectoryPeopleCqrsModule,
  ],
  controllers: [AppController],
  providers: [AppService, PeopleResolver],
})
export class AppModule {}
