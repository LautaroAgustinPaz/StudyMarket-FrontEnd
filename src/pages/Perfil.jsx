import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import './Perfil.css'
import { getOneUser } from "../store/slice/usuarios/acciones-thunk/getOneUser"

const Perfil = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const { usuarios } = useSelector(store => store.usuariosReducer)
    console.log({usuarios});
    

    useEffect(() => {
        dispatch(getOneUser(id))
    }, [dispatch, id])

    //console.log("detalleUsuario", usuarios);
    


  return (
    <div className="container">
        <div className="row">
            <div className="col-xl-8">
                <div className="card">
                    <div className="card-body pb-0 mb-2">
                        <div className="row align-items-center">
                            <div className="col-md-3">
                                <div className="text-center border-end avatar-text" >
                                    <img src={usuarios.imagen} className="img-fluid avatar-xxl rounded-circle" alt=""/>
                                    <h4 className="text-primary font-size-20 mt-3 mb-2">{usuarios.name} {usuarios.apellido}</h4>
                                    <h5 className="text-muted font-size-13 mb-0">Estudiante de Ingenieria en sistemas</h5>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="ms-3">
                                    <div>
                                        <h4 className="card-title mb-2">Sobre Mi</h4>
                                        <p className="mb-0 text-muted">Cursando tercer año de la carrera</p>
                                    </div>
                                    <div className="row my-4">
                                        <div className="col-md-12">
                                            <div>
                                                <p className="text-muted mb-2 fw-medium"><i className="mdi mdi-email-outline me-2"></i>{usuarios.email}
                                                </p>
                                                <p className="text-muted fw-medium mb-0"><i className="mdi mdi-phone-in-talk-outline me-2"></i>418-955-4703
                                                </p>
                                            </div>
                                        </div>
                                    </div>                                                               
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="tab-content p-4">
                        <div className="tab-pane active show" id="projects-tab" role="tabpanel">
                            <div className="d-flex align-items-center">
                                <div className="flex-1">
                                    <h4 className="card-title mb-4">Apuntes</h4>
                                </div>
                            </div>

                            <div className="row" id="all-projects">
                                <div className="col-md-6" id="project-items-1">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex mb-3">
                                                <div className="flex-grow-1 align-items-start">
                                                    <div>
                                                        <h6 className="mb-0 text-muted">
                                                            <i className="mdi mdi-circle-medium text-danger fs-3 align-middle"></i>
                                                            <span className="team-date">21 Jun, 2021</span>
                                                        </h6>
                                                    </div>
                                                </div>                           
                                            </div>

                                            <div className="mb-4">
                                                <h5 className="mb-1 font-size-17 team-title">Analisis matematico I</h5>
                                                <p className="text-muted mb-0 team-description">Apunte para el final de la materia</p>
                                            </div>
                                            <div className="d-flex">
                                                <div className="avatar-group float-start flex-grow-1 task-assigne"></div>                           
                                            </div>
                                        </div>
                                    </div>
                                </div>                               
                            </div>
                        </div>                       
                    </div>
                </div>
            </div>

            <div className="col-xl-4">
                <div className="card">
                    <div className="card-body">
                        <div className="pb-2">
                            <h4 className="card-title mb-3">About</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus sunt nam perspiciatis? Nemo ab earum voluptas adipisci, rerum illo.</p>
                            <ul className="ps-3 mb-0">
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt!</li>
                            </ul>
                            
                        </div>
                        <hr/>
                        <div className="pt-2">
                            <h4 className="card-title mb-4">Mis Materias</h4>
                            <div className="d-flex gap-2 flex-wrap">
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <div>
                            <h4 className="card-title mb-4">Detalles personales</h4>
                            <div className="table-responsive">
                                <table className="table table-bordered mb-0">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Nombre</th>
                                            <td>{usuarios.nombre}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Universidad</th>
                                            <td>UBA</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Carrera</th>
                                            <td>Ingenieria en sistemas</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Avance</th>
                                            <td>25 de 38 materias</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    </div>
  )
}

export default Perfil