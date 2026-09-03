import { Profile1 } from "./profile";

// 1. Set defaults directly in the arguments
export const Avatar = ({index =1,databaseimage ="null",databaseprofile ="null"}) => {
    // 2. Access the data AFTER the defaults are established
    const image = databaseimage[index];
    const profile = databaseprofile[index];
    if (index==0){
        let status= "profile not found";
    }

    

    return (
        <div className="container my-4 d-flex justify-content-center py-2">
            <div className="card shadow" style={{ width: "50rem" }}>
                <div className="card-header bg-dark text-white text-center fw-bold fs-5">
                    User Profile {index+1}
                </div>
                <div className="card-body p-0">
                    <table className="table table-bordered table-dark mb-0 align-middle">
                        <tbody>
                            <tr>
                                <td className="text-center" rowSpan="3" style={{ width: "35%", backgroundColor: "#2c3034" }}>
                                    <img
                                        src={image ?? "image cant be found"}
                                        alt="avatar"
                                        className="img-fluid rounded-circle border-primary border-secondary"
                                        style={{ width: "150px", height: "150px", objectFit: "cover" }}
                                    />
                                </td>
                                <th className="ps-3 text-info">Name</th>
                                <td className="ps-3 text-capitalize text-warning">{profile.name ?? "Name not found"}</td>
                            </tr>
                            <tr>
                                <th className="ps-3 text-info">Email</th>
                                <td className="ps-3 text-danger">{profile.email ?? "Email not found"}</td>
                            </tr>
                            <tr>
                                <th className="ps-3 text-info">Phone</th>
                                <td className="ps-3 text-success">{profile.phone ?? "Phone not found"}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export const Imagepicker = ({ index = 0, databaseimage = [] }) => {
    let imagepic = databaseimage[index] ?? "https://via.placeholder.com";
    return (
        <>
            <div className="container mb-5 col-12 justify-content-center">
                <h1 className="text-success">Imagepicker function is calling...</h1>
            </div>
            <div className="d-flex flex-row p-3 border border-dark rounded shadow-lg mb-4">
                <img src={imagepic} className="img-fluid rounded" alt="profile pic" style={{ width: "200px" }} />
                <div className="ms-5 mt-5">
                    <h2 className="text-dark ms-5">Requirements executed!</h2>
                    <h2 className="text-white ms-5">Thanks!</h2>
                </div>
            </div>
        </>
    );
};



