export type ProfileHeaderProps = {
    userProfile: {
        userName: string;
        questionCount: number;
        answerCount: number;
    }
    viewCount: number;
    commnetCount: number;
    likeCount: number;
}
export type QuestionTitleProps = {
    title: string;
    codetype:string[];
}
export type QuestionBodyProps = {
    questionTitle: string[];
    questionText: string[];
}