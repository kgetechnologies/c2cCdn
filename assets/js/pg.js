$(document).ready(function () {
var transaction_reciept = document.getElementById('PdfDownload');
var btn = document.querySelector('.print-reciept');

// Sets a style property for a given element with the given value.
function set_style_property(element, property, value) {
  element.style.setProperty(property, value);
}

function set_custom_styles_for_download(trans_copy) {
  /* Our CSS styles for elements are applied when reciept is downloaded
    as PDF */
  /* Setting custom styles for transaction card for 
    good UI when downloaded as pdf. Since, not able to 
    modify the styles directly using `jsPDF` */
  trans_copy.style.width = '500px';
  trans_copy.style.margin = 'auto';
  trans_copy.style.padding = '1.3rem';

  // Reducing font sizes.
  for(const element of trans_copy.children)
    set_style_property(element, 'font-size', '13.5px');

  const company_text = trans_copy.querySelector('.company-text');
  // Reducing font sizes.
  set_style_property(company_text, 'font-size', '16px');


  /* Displaying the transaction info container in one row. Incase 
    if it was displayed as a column when viewed on small device. We
    always want the transaction info container to be displayed as a 
    row when the transaction reciept is downloaded.*/
  const transaction_info_container = trans_copy.querySelector('.transaction-info-container');
  set_style_property(transaction_info_container, 'flex-direction', 'row');


  const trans_info_groups = trans_copy.querySelectorAll('.transaction-info-group');
  
  // Reducing font sizes.
  for(const trans_info_group of trans_info_groups) {
    set_style_property(trans_info_group, 'font-size', '12.5px');
    /* Aligning the children of transaction info group to center */
    for(const inner_element of trans_info_group.children)
      set_style_property(inner_element, 'align-self', 'center');
  }


  /* Reducing font size and padding for summary item group elements */
  const summary_item_groups = trans_copy.querySelectorAll('.summary-item-group');
  for(const summary_item_group of summary_item_groups) {
    set_style_property(summary_item_group, 'font-size', '13.5px');
    set_style_property(summary_item_group, 'padding', '.8rem');
    set_style_property(summary_item_group, 'background-color', '#eeeeee');
    set_style_property(summary_item_group, 'border-bottom', 'none');
  }
}


function save_div() {
  /* Creating a copy of the transaction result div, inorder to
    change the styles when downloaded as pdf. */
  const trans_copy = transaction_reciept.cloneNode(true);
  set_custom_styles_for_download(trans_copy);

  window.html2canvas = html2canvas;

  var doc = new jspdf.jsPDF('p', 'pt','a4');

  doc.html(trans_copy, {
    callback: function ()  {
      doc.save('reciept.pdf');
    },
    x: 50,
    y: 50
  });
}

  btn.addEventListener('click', save_div);

});