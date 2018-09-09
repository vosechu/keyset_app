require 'rack'
require 'sinatra'

class App < Sinatra::Base
  use Rack::Static, root: 'public',
    header_rules: [
      [:all, {'Cache-Control' => 'public, max-age=31536000'}],
      [:fonts, {'Access-Control-Allow-Origin' => '*'}]
    ]


  get '/' do
    erb :index
  end

  not_found do
    halt 404, "nawp"
  end

  error do
    halt 500, "nawp"
  end
end
