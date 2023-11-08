import React from 'react';

function Footer() {
  const date = new Date();
  const year = date.getFullYear(); // Mengambil tahun dari objek date

  return (
    <div className='footer'>
      <p>Copyright {year} Ⓒ. All Right Reserved. Designed by LazzyLazzy </p>
    </div>
  );
}

export default Footer;
