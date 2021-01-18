interface HomeScreenProps {
    navigation: any
}

interface CardProps {
    handlePress: () => void
}

interface DetailsProps {
    navigation: any
}

interface WorkoutProps {
    data: Workout
}

interface Workout {
    id: string,
    levelTitle: string,
    liked: boolean,
    exercises: Exercise
}

interface Exercise {
    workoutTitle: string,
    duration: string,
    img_url: string,
    description: string
}

interface NativeImageProps {
    source: string,
    width?: number,
    height?: number
}