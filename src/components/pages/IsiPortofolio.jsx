import React, { Component } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../static/css/isiPortofolio.module.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function importAll(r) {
  let images= {};
  r.keys().map(item => { images[item.replace('../static/images')] = r(item); });
  return images;
}

class IsiPortofolio extends Component {
  state = {  } 

  handleSubmit = e => {
    e.preventDefault();

    // console.log(user)

    axios.post('../portofolio/post')
      .then(() => console.log('post success')
      , window.location.href = "/portofolio",
      )
      .catch(err => {
        console.error(err);
      });
  };


  render() { 
    
  const images = importAll(require.context('../static/images', false, /\.png$/));

    return (
      <React.Fragment>
        <style type="text/css">
        {`
    .btn-flat {
      background-color: black;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
      </style>
        <div className={styles.jarak}>
          <div class="container">
            <h6 class="fw-bold">Artikel</h6>
            <div className={styles.jarakjudul}>
              <div class="row">
                <div className={styles.isi}>
                    <h2 class="fw-bold">REFLEKSI STRATECOMMS TAHUN 2021: KEMENTERIAN PEDULI SERTIFIKASI PROFESI DARI BNSP</h2>
                    <div className={styles.garishr}>31/12/2021, 13:53 WIB</div>
                    <img src= {images['./artikel.png']} width="100%" height="30%"/>
                    <br></br>
                    <p>Perkembangan sertifikasi profesi Public Relations (PR) dari Badan Nasional Sertifikasi Profesi (BNSP) sudah disadari oleh banyak kalangan masyarakat.
                         Hal ini terlihat dari para peserta dengan berlatar belakang pekerjaan yang beragam. Namun mereka tidak hanya mengetahui dan mencari sertifikasi profesinya saja, 
                         beberapa diantaranya mengejar untuk mendapatkan gelar profesinya yaitu C.PR (Certified Public Relations) untuk mendukung karir. Untuk memperoleh gelar ini, peserta
                          harus mengikuti uji kompetensi PR dari Lembaga Sertifikasi Profesi Public Relations Indonesia (LSP PRI) untuk  tiga skema dalam dua tahapan uji kompetensi. 
                          LSP PRI adalah lembaga yang memperoleh ijin dari BNSP, untuk menyelenggarakan Uji Sertifikasi Profesi PR.</p>
                    <p>Pada Bulan Desember 2021, Pimpinan STRATECOMMS, Dr Muhammad Adi Pribadi, C.PR menyerahkan sertifikat profesi PR untuk skema C.PR kepada Bapak Siko D.S.W, S.ST.,
                           C.PR. Penyerahan sertifikat ini adalah untuk yang kedua kalinya oleh Pimpinan STRATECOMMS karena beliau harus mengikuti uji kompetensi PR dari LSP PRI - BNSP, 
                           sebanyak dua kali untuk tiga skema dalam memperoleh gelar C.PR. Bapak Siko yang bekerja di Kementerian Keuangan Republik Indonesia sangat peduli dengan gelar profesi
                            ini untuk menunjang karirnya. Hal ini menunjukkan bahwa lembaganya sangat memperhatikan pegawainya untuk memperoleh sertifikat profesi dari BNSP. </p>
                    <p>STRATECOMMS bekerjasama dengan LSP PRI akan mengadakan uji kompetensi PR berikutnya pada sabtu 22 Januari 2022. Sedangkan, workshop persiapan uji kompetensi 
                        PR akan dilaksanakan pada sabtu 15 Januari 2022. Silahkan menghubungi STRATECOMMS di nomer telpon 081390601398 untuk informasi lebih lanjut.</p>
                    <p>Hal ini menjadi kebahagiaan tersendiri bagi STRATECOMMS yang selalu mendampingi para asesinya untuk maju bersama dalam meraih harapan terbaiknya. 
                        Salam sehat dan sukses untuk kita semua dalam mengarungi waktu di tahun 2022.</p>
                        <br></br>                
                </div>
                <div class="mb-3 row text-left">
                  <h2 class="fw-bold">LEAVE A REPLY.</h2>
              </div>
              <div class="col-6"> 
                <form class="form-horizontal" method='post' onSubmit={this.handleSubmit}>
                  <Form.Group className="mb-3" controlId="Nama">
                    <Form.Label>Name (required)</Form.Label>
                    <Form.Control type="email" placeholder="name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="Email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="Website">
                    <Form.Label>Website</Form.Label>
                    <Form.Control type="email" placeholder="Website" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="comment">
                    <Form.Label>Comment (required)</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <Button variant="flat" type="submit" style={{float:'right'}}>
                    Submit
                  </Button>
              </form>
              </div>
              </div>
            </div>

          </div> 
        </div>


        {/* <form method='post' onSubmit={this.handleSubmit}>
          <input type="text" className='m-3'/>
          <button className='btn btn-success'>Submit</button>
        </form> */}
      </React.Fragment>
    );
  }
}
 
export default IsiPortofolio;