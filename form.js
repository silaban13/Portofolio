function sendMail () {
  // Ambil nilai input
  const params = {
    name   : document.getElementById("name").value.trim(),
    email  : document.getElementById("email").value.trim(),
    subject: document.getElementById("subject").value.trim(),
    message: document.getElementById("message").value.trim()
  };

  // Validasi sederhana
  if (!params.name || !params.email || !params.subject || !params.message) {
    alert("Semua field wajib diisi!");
    return;
  }

  // Kirim via EmailJS
  emailjs.send("service_hedzp94", "template_vxjgog8", params)
    .then(res => {
      document.getElementById("name").value    = "";
      document.getElementById("email").value   = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";

      console.log("EmailJS response:", res);
      alert("Pesan berhasil dikirim!");
    })
    .catch(err => {
      console.error("EmailJS error:", err);
      alert("Terjadi kesalahan: " + (err.text || "unknown"));
    });
}
