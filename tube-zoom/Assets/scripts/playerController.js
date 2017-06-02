#pragma strict

public var upperLimmit : float;

function Start () {

}

function Update () {
	if (Input.mousePosition.y > 0) {
		var pos : float = (Input.mousePosition.y / Screen.height) * upperLimmit;

		transform.position.z = pos;
	}
}