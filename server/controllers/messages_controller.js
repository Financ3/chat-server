let messages = [];
//message object that would be stored in this array:
/*
    {
        id: idValue,
        text: textValue,
        time: timeValue
    }
*/

let id = 0;

module.exports = {
    create: function(req, res, next) {
        let newChat = {};
        newChat.id = id;
        newChat.text = req.body.text;
        newChat.time = req.body.time;
        messages.push(newChat);
        id = id+1;
        res.status(200).send(messages);
    },
    read: function(req, res, next) {
        res.status(200).send(messages);
    },
    update: function(req, res, next) {
        let lookupId = +req.params.id;
        let arrayForLookup = messages;
        let foundChat = {};

        arrayForLookup.map((message,index) => {
            if(message.id===lookupId) {
                foundChat.id=lookupId;
                foundChat.text = req.body.text;
                foundChat.time = req.body.time;

                arrayForLookup[index] = foundChat;
            }
        });
        res.status(200).send(messages);
    },
    delete: function(req, res, next) {
        let lookupId = +req.params.id;
        let arrayForLookup = messages;

        arrayForLookup.map((message,index) => {
            if(message.id===lookupId) {
                arrayForLookup.splice(index,1);
            }
        });
        messages = arrayForLookup;
        res.status(200).send(messages);
    }
};