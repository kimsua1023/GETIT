export function FriendCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>MBTI: {props.MBTI}</p>
      <p>취미: {props.hobby}</p>
    </div>
  );
}