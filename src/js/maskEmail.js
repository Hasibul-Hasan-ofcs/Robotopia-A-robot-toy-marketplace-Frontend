function maskEmail(email) {
  var atIndex = email.indexOf("@");
  var name = email.slice(0, atIndex);
  var masked = name.charAt(0) + name.slice(1).replace(/./g, "*");
  return masked + email.slice(atIndex);
}

export { maskEmail };
