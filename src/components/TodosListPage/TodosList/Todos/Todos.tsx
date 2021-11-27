import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Todos = (props: any) => {
  return (
    <li>
      <div>
        <p
          style={{
            textDecoration: props.body.completed ? "line-through" : "none",
          }}
        >
          {props.body.text}
        </p>
      </div>
      <div>
        <p
          style={{
            textDecoration: props.body.completed ? "line-through" : "none",
          }}
        >{`${props.body.date}`}</p>
      </div>
      <div>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) => {
                  props.onChangeComplitedCheckBox(
                    props.body.completed,
                    props.body.id
                  );
                }}
                checked={props.body.completed}
              />
            }
            label="Complited"
          />
        </FormGroup>
        <Button
          onClick={(e) => {
            e.preventDefault();
            props.deleteTodos(props.body.id);
          }}
          variant="contained"
        >
          Delete
        </Button>
      </div>
    </li>
  );
};
export default Todos;
