import { Link, Form, redirect } from "react-router-dom";
import classes from "./NewPost.module.css";
import Modal from "../components/Modal";

function NewPost() {
  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="message" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Abbrechen
          </Link>
          <button>Senden</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;
// die fkt wird dann von router anstatt der backend form method post ausgeführt 
// export function action(data) {
  // automatisch bekommt man ein data arg was nicht data von form ist sondern ein objekt was von request object von react router gemacht ist
  // data.request
  // fetch("http://localhost:8080/posts", {
  //   method: "POST",
  //   body: JSON.stringify(postData),
  //   headers: { "Content-Type": "application/json" },
  //});
//} 
  // - weil es ja ein object mit einem object request ist kann man im nächsten schritt destructuring machen

export async function action({request}) {
const formData = await request.formData();
const postData = Object.fromEntries(formData); 
// request object hat formData method welche dann zugriff auf die komponenten form daten hat und kann dort dann abgeben - formData benutzt eine promise deswegen muss async await benutzt werden dann bekommt man ein relativ komplexes objekt zurück (nicht nur key values) also hier dann in constante formData speichern --> deswegen im nächsten Schritt dann das Objekt verändern mit fromEntries um key values zu kriegen {message: '..', author: '...'} wegen name values in obiger form

// das wird alles von React Router gemacht um die Daten zu bekommen die dann die fetch function request schickt -  errorhandling kann man dann hier checken
// aber ohne dann await noch hinzufügen und dann weitere funktion redirect() von react router die dann zurückgegeben wird
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: { "Content-Type": "application/json" },
  });
  return redirect('/');
  // nachdem dann durhc action daten zurückgegeben wird kann man jetzt über redirect bestimmen welche route user zu gesicht bekommt - macht sinn wieder startseite zu bekommen weil man ja eintrag abgesendet hat und dann auf pinnwand sehen will
}
