class HomeController < ApplicationController
  def index
  end

  def new
  end

  def create
  	searchterm = params[:searchterm]
  	# binding.pry
  	render :template => 'home/search', :content_type => 'text/javascript'
  end

end
