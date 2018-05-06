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

