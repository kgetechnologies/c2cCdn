var transaction_reciept = document.getElementById('PdfDownload');
var btn = document.getElementById('print-btn');

// Sets a style property for a given element with the given value.
function set_style_property(element, property, value) {
  element.style.setProperty(property, value);
}

function set_custom_styles_for_download(trans_copy) {
  /* Setting custom styles of transaction card for 
    good UI when downloaded as pdf. Since, not able to 
    modify the styles directly using `jsPDF` */
  trans_copy.style.width = '500px';
  trans_copy.style.margin = 'auto';

  // Reducing font sizes.
  for(const element of trans_copy.children)
    set_style_property(element, 'font-size', '13.5px');

  const company_text = trans_copy.querySelector('.company-text');

  // Reducing font sizes.
  set_style_property(company_text, 'font-size', '16px');

  const trans_info_groups = trans_copy.querySelectorAll('.transaction-info-group');

  // Reducing font sizes.
  for(const element of trans_info_groups)
    set_style_property(element, 'font-size', '13.5px');
}

function save_div() {
  /* Creating a copy of the transaction result div, inorder to
    change the styles when downloaded as pdf. */
  const trans_copy = transaction_reciept.cloneNode(true);
  set_custom_styles_for_download(trans_copy);
  window.html2canvas = html2canvas;
  
  var doc = new jspdf.jsPDF('p', 'pt','a4');

  doc.html(trans_copy, {
    callback: function (doc)  {
      doc.save('reciept.pdf');
    },
    x: 50,
    y: 50
  });
}

btn.addEventListener('click', save_div);