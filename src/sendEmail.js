import emailjs from "emailjs-com";

const service_id = "default_service";
const template_id = "template_xw5bjLyz";
const user_id = "user_Mr9I8gXe6ulBGG2isGnsw";

const template = `
<html>
    <head>
      <title></title>
      <style>
        .img-container {
            height: 1721px;
            width: 667px;
            background-size: cover;
            background-repeat: no-repeat;
            background: url(http://cdn.mcauto-images-production.sendgrid.net/f5cd8e5f1a6a4ea4/e7e9bea1-cd25-4a49-a62f-b05f1b18b064/667x1721.jpg);
            @media (min-width: 768px) {
                width: 1250px;
                background: url(http://cdn.mcauto-images-production.sendgrid.net/f5cd8e5f1a6a4ea4/c9545652-e071-4701-a16d-89e559900f82/1250x1721.jpg);
            }
        }
      </style>
    </head>
    <body>
      <div data-role="module-unsubscribe" class="module" role="module" data-type="unsubscribe" style="color:#444444; font-size:12px; line-height:20px; padding:16px 16px 16px 16px; text-align:Center;" data-muid="4e838cf3-9892-4a6d-94d6-170e474d21e5">

        <div class="img-container"></div>
        <!--
        <p style="font-size:12px; line-height:20px;">
          <a class="Unsubscribe--unsubscribeLink" href="{{{unsubscribe}}}" target="_blank" style="font-family:sans-serif;text-decoration:none;">
            Unsubscribe
          </a>
          -
          <a href="{{{unsubscribe_preferences}}}" target="_blank" class="Unsubscribe--unsubscribePreferences" style="font-family:sans-serif;text-decoration:none;">
            Unsubscribe Preferences
          </a>
        </p>
        -->
      </div>
    </body>
  </html>
`;

const sendEmail = (email) => {
  const template_params = { email, template };
  emailjs.send(service_id, template_id, template_params, user_id).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
      return true;
    },
    (err) => {
      console.log("FAILED...", err);
      return false;
    }
  );
};

export default sendEmail;
