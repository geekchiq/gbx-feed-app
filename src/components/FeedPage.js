import React from 'react'
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText} from "mdb-react-ui-kit";

const Posts = ({ posts }) => {
    return (
        <MDBRow className='row-cols-md-3 g-4'>   
            {posts.map((post) => ( 
                <MDBCol key={post.id}>
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCardTitle>{post.title}</MDBCardTitle>
                            <MDBCardText>{post.body}</MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            ))}
        </MDBRow>
    )
};

export default Posts