Teams = new Meteor.Collection('team');

Teams.allow({
  insert() { return false; },
  update() { return false; },
  remove() { return false; }
});

Teams.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});

TeamSchema = new TeamSchema({
    'name': {
        type: String,
        label: 'Team name'
    },
    'active': {
        type: Boolean
    }
    'created': {
        type: Date,
        label: 'Date created',
        denyUpdate: true,
        autoValue: function() {
            if ( this.isInsert ) {
                return new Date;
            } 
        }
    },
    'updated': {
        type: Date,
        label: "Date Coffee Updated in System",
        autoValue: function() {
            if ( this.isUpdate ) {
                return new Date;
            } 
        }
    }
});

Teams.attachScema(TeamSchema);

export { Teams };