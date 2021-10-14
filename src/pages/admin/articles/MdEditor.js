import React from 'react'
import Editor from 'for-editor'

class WriteBlog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editorValue: '',
            imageUrl: ''
        }
    }
    handleChange(value) {
        this.setState({
            editorValue: value
        })
    }
    uploadHandler(params) {
        this.setState({
            imageUrl: 'http://img.xuweijin.com/'
        })
        let str = this.state.editorValue + 'http://img.xuweijin.com'
        this.setState({
            editorValue: str
        })
    }
    render() {
        return (
            <Editor className="my-editor"
                subfield={true}
                preview={true}
                addImg={(file) => this.uploadHandler(file)}
                value={this.state.editorValue} onChange={(value) => this.handleChange(value)} />
        )
    }
};

export default WriteBlog;