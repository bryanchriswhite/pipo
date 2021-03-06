module.exports = function(){
  switch(process.env.NODE_ENV){
    case 'development':
      return {
        encryptionStrategy: "clientKey",
        encryptionType: "aes256",
        chats: {
          messagesPerPage: 50,
          initialPagesToLoad: 1
        },
        server: {
          ssl: false,
          host: "localhost",
          port: 3030
        }
      };

    case 'production':
      return {
        encryptionStrategy: "clientKey",
        encryptionType: "aes256",
        chats: {
          messagesPerPage: 50,
          initialPagesToLoad: 1
        },
        server: {
          ssl: true,
          host: "pipo.chat",
          port: 443
        }
    };

    default:
      return {
        encryptionStrategy: "clientKey",
        encryptionType: "aes256",
        chats: {
          messagesPerPage: 50,
          initialPagesToLoad: 1
        },
        server: {
          ssl: false,
          host: "localhost",
          port: 3030
        }
      };
    }
};
