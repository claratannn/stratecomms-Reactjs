import React, { Component } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../static/css/pendaftaran.module.css' 

class Pendaftaran extends Component {
  state = {  } 

  render() { 
    return (
      <React.Fragment>
        <div className={`container-fluid ${styles.body}`}>
            <div class="mb-3 row text-center">
                <h1>Pendaftaran</h1>
            </div>
            <form class="form-horizontal">
                <div class="row mb-3">
                    <label className={`control-label col-sm-2 ${styles.variabel}`}>Nama Lengkap</label>
                        <div className={`col-7 ${styles.column}`}>
                            <input class="form-control" type="Nama Lengkap" />
                        </div>
                </div>
                <div class="row mb-3">
                    <label className={`control-label col-sm-2 ${styles.variabel}`}>Nomor Telepon (Whatsapp) </label>
                    <div className={`col-7 ${styles.column}`}>
                            <input class="form-control" type="Nomor telepon" />
                        </div>
                </div>
                <div class="row mb-3">
                    <label className={`control-label col-sm-2 ${styles.variabel}`}>Scan Pas Foto (3x4) </label>
                    <div className={`col-7 ${styles.column}`}>
                            <input class="form-control" type="file"/>
                        </div>
                </div>
                <div class="row mb-3">
                    <label className={`control-label col-sm-2 ${styles.variabel}`}>Curicculum Vitae (CV) </label>
                    <div className={`col-7 ${styles.column}`}>
                            <input class="form-control" type="file" />
                        </div>
                </div>
                <div class="row mb-3">
                    <label className={`control-label col-sm-2 ${styles.variabel}`}>Scan Ijazah </label>
                    <div className={`col-7 ${styles.column}`}>
                            <input class="form-control" type="file"/>
                        </div>
                </div>
                <div class="row mb-3">
                    <label className={`control-label col-sm-2 ${styles.variabel}`}>Scan Kartu Tanda Penduduk (KTP) </label>
                    <div className={`col-7 ${styles.column}`}>
                            <input class="form-control" type="file"/>
                        </div>
                </div>
                <div class="m-3 text-center">
                  <button className={`btn btn-success ${styles.variabel}`}>Submit</button>
                </div>
            </form>
        </div>
      </React.Fragment>
    );
  }
}
 
export default Pendaftaran;