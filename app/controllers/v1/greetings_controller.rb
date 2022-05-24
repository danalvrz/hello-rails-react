class V1::GreetingsController < ApplicationController
  def index
    render json: { greetings: [
      {
        text: 'hello!'
      },
      {
        text: 'hola!'
      },
      {
        text: 'hi!'
      },
      {
        text: 'hallo!'
      },
      {
        text: 'ciao!'
      }
    ] }.to_json
  end
end
