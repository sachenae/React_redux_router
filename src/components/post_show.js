import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSelectedPost } from '../actions';
import { Link } from 'react-router-dom';

class PostShow extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchSelectedPost(id);
    }
    render(){
        const { post } = this.props;

        if(!post) {
            return <div>Loading..</div>
        }
        return(
            <div>
                <Link to="/">Back To Index</Link>
                <h3>{post.title}</h3>
                <h5>Categories: {post.categories}</h5>
                <p>{post.content}</p>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps ){
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchSelectedPost })(PostShow);