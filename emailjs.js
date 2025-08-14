// Initialize EmailJS
emailjs.init("3k9rSeSWH0Sn37Y3m");

const sendOrderEmail = async (toEmail, toName, productName, loginEmail, loginPassword) => {
  try {
    await emailjs.send(
      "service_t8xkqk1",
      "template_n3be5c6",
      {
        to_email: toEmail,
        to_name: toName,
        product_name: productName,
        login_email: loginEmail,
        login_password: loginPassword
      }
    );
    return true;
  } catch (error) {
    console.error("Email sending failed:", error);
    return false;
  }
};
