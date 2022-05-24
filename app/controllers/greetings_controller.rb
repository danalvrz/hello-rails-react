class GreetingsController < ApplicationController
  # GET /greetings
  def index
    @greetings = Greeting.all
    render json: @greetings
  end

  # GET /greetings/random
  def random
    @greetings = Greeting.where(id: rand(1..5))
    render json: @greetings
  end

  # GET /greetings/1.json
  def show
    @greeting = Greeting.find(params[:id])
    render json: @greeting
  end

  # POST /greetings or /greetings.json
  def create
    @greeting = Greeting.create(
      text: params[:text]
    )
    render json: @greeting
  end
end
