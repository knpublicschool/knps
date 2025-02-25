import React, { Component } from 'react'

export default class Whatsappbutton extends Component {
    render() {
        return (
            <div>
                <a href="https://api.whatsapp.com/send?phone=+918077640656&text=Hi" className="float" target="_blank">
                    <i className="fa fa-whatsapp my-float"></i>
                </a>
            </div>
        )
    }
}
