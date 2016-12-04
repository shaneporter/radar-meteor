import { Teams } from '../../../collections/teamCollection';

if(Meteor.users.find().count() < 10){
  _.each(_.range(10), function(){

    Teams.insert({
      name: faker.company.companyName(),
      active: faker.random.boolean()
    });

  });
}
