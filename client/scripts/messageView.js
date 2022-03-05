// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(`
      <div class="chat">
<<<<<<< HEAD
        <div class="username">
          <%-username%>
        </div>
        <div class="message">
=======
        <div class="username <%= Friends.isFriend(username) ? 'friend' : '' %>"
        " data-username="<%- username %>">
          <%- username %>
        </div>
        <div id="message">
>>>>>>> 78cf3cd194a837588147cf26c8355b9e16792879
          <%-text%>
        </div>
      </div>
    `)

};

// render: _.template(`
// <!--
// <div class="chat">
//   <div class="username"></div>
//   <div></div>
// </div>
// -->
// `)