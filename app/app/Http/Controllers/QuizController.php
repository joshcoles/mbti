<?php

namespace App\Http\Controllers;

use App\Quiz;
use Illuminate\Http\Request;

class QuizController extends Controller
{

    const QUESTIONS = [
		1 => [
			"text" => "You find it takes effort to introduce yourself to other people.",
			"dimension" => "EI",
			"direction" => 1,
		],

		2 => [
			"text" => "You consider yourself more practical than creative.",
			"dimension" => "SN",
			"direction" => -1,
		],
		
		3 => [
			"text" => "Winning a debate matters less to you than making sure no one gets upset.",
			"dimension" => "TF",
			"direction" => 1,
		],
		
		4 => [
			"text" => "You get energized going to social events that involve many interactions.",
			"dimension" => "EI",
			"direction" => -1,
		],
		
		5 => [
			"text" => "You often spend time exploring unrealistic and impractical yet intriguing ideas.",
			"dimension" => "SN",
			"direction" => 1,
		],
		
		6 => [
			"text" => "Deadlines seem to you to be of relative rather than absolute importance.",
			"dimension" => "JP",
			"direction" => 1,
		],
		
		7 => [
			"text" => "Logic is usually more important than heart when it comes to making important decisions.",
			"dimension" => "TF",
			"direction" => -1,
		],
		
		8 => [
			"text" => "Your home and work environments are quite tidy.",
			"dimension" => "JP",
			"direction" => -1,
		],
		
		9 => [
			"text" => "You do not mind being at the center of attention.",
			"dimension" => "EI",
			"direction" => -1,
		],
		
		10 => [
			"text" => "Keeping your options open is more important than having a to-do list.",
			"dimension" => "JP",
			"direction" => 1,
		],
    ];
    
    public function calculateMBTI($answers) {
		$dimensions = [
			"EI" => ["value" => 0.0, "questions_count" => 0],
			"SN" => ["value" => 0.0, "questions_count" => 0],
			"TF" => ["value" => 0.0, "questions_count" => 0],
			"JP" => ["value" => 0.0, "questions_count" => 0],
		];
	
		foreach($answers as $answer) {
			$questionID = $answer['question_id'];
			$value = $answer['value'];
			
			$question = self::QUESTIONS[$questionID];
			$direction = $question['direction'];
			$dimension = $question['dimension'];
			
			$answerShift = $value - 4.0;
			$value = $answerShift * $direction;
			
			$dimensions[$dimension]['value'] += $value;
			$dimensions[$dimension]['questions_count'] += 1;
		}
		
		$results = [];
		$breakdown = [];

		foreach($dimensions as $dimensionKey => $dimension) {
			$value = $dimension['value'];
			$questionsCount = $dimension['questions_count'];
			
			$results[$dimensionKey] = $dimensionKey[$value <= 0 ? 0 : 1];
			
			$maxPoints = $questionsCount * 3.0;
			$maxRange = $maxPoints * 2.0;
			
			$breakdown[$dimensionKey] = (int)((($value + $maxPoints) / $maxRange) * 100.0);
		}

		// return [
		// 	'results' => implode($results, ''),
		// 	'breakdown' => $breakdown
		// ];

		return implode($results, '');
    }	
    


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function all()
    {

        $quizzes = Quiz::all();
        return $quizzes;
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $result = QuizController::calculateMBTI([
            ['question_id' => 1,  'value' => $request->question1],
            ['question_id' => 2,  'value' => $request->question2],
            ['question_id' => 3,  'value' => $request->question3],
            ['question_id' => 4,  'value' => $request->question4],
            ['question_id' => 5,  'value' => $request->question5],
            ['question_id' => 6,  'value' => $request->question6],	
            ['question_id' => 7,  'value' => $request->question7],	
            ['question_id' => 8,  'value' => $request->question8],	
            ['question_id' => 9,  'value' => $request->question9],	
            ['question_id' => 10, 'value' => $request->question10]
        ]);


        $quiz = Quiz::create([
            'email'=> $request->email,
            'question1'=> $request->question1,
            'question2'=> $request->question2,
            'question3'=> $request->question3,
            'question4'=> $request->question4,
            'question5'=> $request->question5,
            'question6'=> $request->question6,
            'question7'=> $request->question7,
            'question8'=> $request->question8,
            'question9'=> $request->question9,
            'question10'=> $request->question10,
            'result'=> $result
        ]);

        $quiz->save();

        return $quiz->id;
        // return $request;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Quiz  $quiz
     * @return \Illuminate\Http\Response
     */
    public function show(Quiz $quiz)
    {

        $quiz = Quiz::find($quiz->id);
        return $quiz;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Quiz  $quiz
     * @return \Illuminate\Http\Response
     */
    public function edit(Quiz $quiz)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Quiz  $quiz
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Quiz $quiz)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Quiz  $quiz
     * @return \Illuminate\Http\Response
     */
    public function destroy(Quiz $quiz)
    {
        //
    }
}
