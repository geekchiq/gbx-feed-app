import React from "react";
import { MDBRow, MDBCol, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdb-react-ui-kit";

const FiltePage = ({ posts }) => {
    return (
        <MDBRow className='row-cols-2'>
            <form>
                <MDBCol>
                    <MDBDropdown>
                        <MDBDropdownToggle caret color="primary">
                            Filter User ID
                        </MDBDropdownToggle>
                        <MDBDropdownMenu basic>
                            {posts.map((post, index) => (
                                <MDBDropdownItem key={index}>{post.userId}</MDBDropdownItem>
                            ))}
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBCol>
                <MDBCol>
                    <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
                </MDBCol>
            </form>
        </MDBRow>
    );
}

export default FiltePage;