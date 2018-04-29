import SendBird from 'sendbird';

export const sbCreateOpenChannelListQuery = () => {
  const sb = SendBird.getInstance();
  return sb.OpenChannel.createOpenChannelListQuery();
}

export const sbGetOpenChannelList = (openChannelListQuery) => {
  return new Promise((resolve, reject) => {
    openChannelListQuery.next((channels, error) => {
      if (error) {
        reject(error);
      } else {
        resolve(channels);
      }
    });
  });
}


export const sbGetOpenChannel = (channelUrl) => {
  return new Promise((resolve, reject) => {
    const sb = SendBird.getInstance();
    if (sb) {

      sb.OpenChannel.getChannel(channelUrl, function (channel, error) {
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

export const sbOpenChannelEnter = (channel) => {
  return new Promise((resolve, reject) => {
    channel.enter(function(response, error){
      if (error) {
        resolve(null);

      }
      console.log("enter chanel");
      resolve(channel);
    });
  });


}


