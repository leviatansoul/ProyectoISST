import SendBird from 'sendbird';

const APP_ID = '4D76C462-5631-4971-BDE9-4F2E3F5CADFC';

export const sbConnect = (userId, nickname) => {
  return new Promise((resolve, reject) => {
    const sb = new SendBird({ 'appId': APP_ID });
    sb.connect(userId, (user, error) => {
      if (error) {
        reject('SendBird Login Failed.');
      } else {
        sb.updateCurrentUserInfo(nickname, null, (user, error) => {
          if (error) {
            reject('Update User Failed.');
          } else {
            resolve(user);
          }
        })
      }
    })
  })
};

export const sbDisconnect = () => {
  return new Promise((resolve, reject) => {
    const sb = SendBird.getInstance();
    if (sb) {
      sb.disconnect(() => {
        resolve(null);
      });
    } else {
      resolve(null);
    }
  })
};

export const sbAddChannel = () => {
  return new Promise((resolve, reject) => {
    const sb = SendBird.getInstance();
    if (sb) {
      var userIds = [user1, user2];
      sb.OpenChannel.getChannel('sendbird_open_channel_36112_166188ad5b5edfb803d2c2757153bfc62a09e7e9', function (channel, error) {
        if (error) {
          console.error(error);
          return;
        }

        channel.enter(function(response, error){
          if (error) {
            console.error(error);
            return;
          }
        });
      });

    } else {
      resolve(null);
    }
  })
};

export const sbCreateGroupChannel = (user1, user2) => {
  return new Promise((resolve, reject) => {

    console.log("Entra");
    const sb = SendBird.getInstance();
    console.log("No ha petado");
    if (sb) {
      var userIds = [user1, user2];
      var name = user1+user2;
// distinct is false
      // For typical 1-to-1 chat which is unique between two users
      console.log("vamos a crear");
      sb.GroupChannel.createChannelWithUserIds([user1], true, name, name, name, name, function(createdChannel, error){
        if (error) {
          console.error(error);
          console.log("Error1");
          return;
        }
        console.log("Exito al crear baby");
      });

    } else {
      console.log("Error2");
      resolve(null);


    }
  })
};

export const sbGetGroupChannel = (user1, user2) => {
  return new Promise((resolve, reject) => {
    const sb = SendBird.getInstance();
    if (sb) {

// distinct is false
      var channelListQuery = sb.GroupChannel.createMyGroupChannelListQuery();
      channelListQuery.includeEmpty = true;
      var userIds = [];

      userIds.push(user1);
    //  userIds.push(user2);
      console.log(userIds);

      channelListQuery.userIdsFilter = userIds;

      console.log(channelListQuery);
      if (channelListQuery.hasNext) {
        channelListQuery.next(function(channelList, error){
          if (error) {
            console.error(error);
            return;
          }

          // returns channelA only.
          console.log(channelList);
          console.log("Chanel encontrado");
          resolve(channelList[0].url);
        });
      }

    } else {
      resolve(null);
    }
  })
};

export const sbGetGroupChannelUrl = (channelUrl) => {
  return new Promise((resolve, reject) => {
    const sb = SendBird.getInstance();
    if (sb) {

      sb.GroupChannel.getChannel(channelUrl, function (channel, error) {
        if (error) {
          console.error(error);
          return;
        }
        console.log("chanel va");
        resolve(channel);
      });

    } else {
      console.log("fail");
      resolve(null);
    }
  })
}

