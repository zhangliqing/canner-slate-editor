/**
 * Created by zhangliqing on 2018/5/18.
 */
// @flow
import * as React from "react";
import Dropzone from 'react-dropzone';
import ImageCompressor from 'image-compressor.js';

class Image extends React.Component<any> {
  constructor(props) {
    super(props)
    this.state = { imageBase64Files:[] }
  }

  handleDrop(imageFiles) {
    let imageBase64Files=new Array();

    imageFiles.forEach(file => {
      new ImageCompressor(file, {
        quality: 0.6,
        success: (result) => {
          var reader = new FileReader();
          reader.readAsDataURL(result);
          reader.onloadend = ()=> {
            let base64data = reader.result;
            imageBase64Files.push(base64data);
            this.setState({imageBase64Files:imageBase64Files});
          }
        },
        error: (e) => {
          console.log(e.message);
        },
      });
    });
  }


  render() {
    const { imageBase64Files } = this.state

    return (
      <section>
        {imageBase64Files.length === 0 && <Dropzone onDrop={ this.handleDrop.bind(this) }>
          拖拽或点击上传
        </Dropzone>}
        { imageBase64Files.length > 0 && <div>{imageBase64Files.map((base,i) => <img src={base} key={i} style={{margin: "10px auto", maxWidth:"100%"}} /> )}</div>}
      </section>
    )
  }
}

export default Image;
