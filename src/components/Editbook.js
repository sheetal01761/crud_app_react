import React from "react";
import {
  Button,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
import { Link } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { updateBook, getBookById } from "../services/book.service";

export default class Editbook extends React.Component {
  // constructor(props) {
  // super(props);
  // }
  handleSalePrice = (event, data) => {
    debugger;
    let price = event.currentTarget.value + event.key;
    if (Number(price) > Number(data)) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      return true;
    }
  };
  handleSubmit = values => {
    debugger;
    updateBook(values);
    this.props.history.push("books");
  };
  render() {
    let values = getBookById(this.props.match.params.id);
    // debugger;
    return (
      <Form
        initialValues={{
          id: values.id,
          bookname: values.bookname,
          author: values.author,
          saleprice: values.saleprice,
          price: values.price,
          email: values.email
        }}
        onSubmit={this.handleSubmit}
        validate={values => {
          const errors = {};
          function validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
          }
          if (!values.bookname) {
            errors.bookname = "Fill this field";
          } else if (
            values.bookname.length < 3 ||
            values.bookname.length > 25
          ) {
            errors.bookname = "Length should be between 3 and 25";
          }
          if (!values.price) {
            errors.price = "Fill this field";
          } else if (isNaN(values.price)) {
            errors.price = "Price should be only numbers";
          }
          if (!values.saleprice) {
            errors.saleprice = "Fill this field";
          } else if (isNaN(values.saleprice)) {
            errors.saleprice = "Should be only numbers";
          } else if (values.price < values.saleprice) {
            errors.saleprice = "Price must be greater than sale price";
          }
          if (!values.email) {
            errors.email = "Fill this field";
          } else if (!validateEmail(values.email)) {
            errors.email = "Invalid email address";
          }
          if (!values.author) {
            errors.author = "Fill this field";
          } else if (!isNaN(values.author)) {
            errors.author = "Should be only alphabets";
          }
          if (!values.id) {
            errors.id = "Fill this field";
          }
          return errors;
        }}
        render={({ handleSubmit, valid }) => (
          <form onSubmit={handleSubmit}>
            <p className="heading-text">EDIT BOOK</p>
            <Container>
              <Row>
                <Col sm="12" md={{ size: 4, offset: 4 }}>
                  <FormGroup>
                    <Label for="bookname" className="font-weight-bold">
                      Book Name
                    </Label>
                    <Field name="bookname">
                      {({ input, meta }) => (
                        <div>
                          <Input
                            {...input}
                            type="text"
                            placeholder="book name"
                            invalid={meta.error && meta.touched}
                          />
                          {meta.error && meta.touched && (
                            <span>{meta.error}</span>
                          )}
                        </div>
                      )}
                    </Field>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm="12" md={{ size: 4, offset: 4 }}>
                  <FormGroup>
                    <Label for="saleprice" className="font-weight-bold">
                      Sale Price
                    </Label>
                    <Field name="saleprice">
                      {({ input, meta }) => (
                        <div>
                          <Input
                            {...input}
                            type="text"
                            placeholder="Enter sale price"
                            invalid={meta.error && meta.touched}
                            onKeyPress={event =>
                              this.handleSalePrice(event, values.price)
                            }
                          />
                          {meta.error && meta.touched && (
                            <span>{meta.error}</span>
                          )}
                        </div>
                      )}
                    </Field>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm="12" md={{ size: 4, offset: 4 }}>
                  <FormGroup>
                    <Label for="price" className="font-weight-bold">
                      Price
                    </Label>
                    <Field name="price">
                      {({ input, meta }) => (
                        <div>
                          <Input
                            {...input}
                            type="text"
                            placeholder="Price"
                            onKeyPress="myfunc()"
                            invalid={meta.error && meta.touched}
                          />
                          {meta.error && meta.touched && (
                            <span>{meta.error}</span>
                          )}
                        </div>
                      )}
                    </Field>
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col sm="12" md={{ size: 4, offset: 4 }}>
                  <FormGroup>
                    <Label for="id" className="font-weight-bold">
                      ID
                    </Label>
                    <Field name="id">
                      {({ input, meta }) => (
                        <div>
                          <Input
                            {...input}
                            type="text"
                            readOnly
                            placeholder="Id"
                            invalid={meta.error && meta.touched}
                          />
                          {meta.error && meta.touched && (
                            <span>{meta.error}</span>
                          )}
                        </div>
                      )}
                    </Field>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm="12" md={{ size: 4, offset: 4 }}>
                  <FormGroup>
                    <Label for="author" className="font-weight-bold">
                      Author
                    </Label>
                    <Field name="author">
                      {({ input, meta }) => (
                        <div>
                          <Input
                            {...input}
                            type="text"
                            placeholder="Author name"
                            invalid={meta.error && meta.touched}
                          />
                          {meta.error && meta.touched && (
                            <span>{meta.error}</span>
                          )}
                        </div>
                      )}
                    </Field>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm="12" md={{ size: 4, offset: 4 }}>
                  <FormGroup>
                    <Label for="email" className="font-weight-bold">
                      Mail Id
                    </Label>
                    <Field name="email">
                      {({ input, meta }) => (
                        <div>
                          <Input
                            {...input}
                            type="email"
                            placeholder="email id"
                            invalid={meta.error && meta.touched}
                          />
                          {meta.error && meta.touched && (
                            <span>{meta.error}</span>
                          )}
                        </div>
                      )}
                    </Field>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm="12" md={{ size: 4, offset: 4 }}>
                  <Button type="submit" color="primary" disabled={!valid}>
                    Make changes
                  </Button>
                  <Link to="/books" className="btn btn-danger ml-5">
                    Cancel
                  </Link>
                </Col>
              </Row>
            </Container>
          </form>
        )}
      />
    );
  }
}
