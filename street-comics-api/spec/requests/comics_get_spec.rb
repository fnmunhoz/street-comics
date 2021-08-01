require 'rails_helper'

describe "Comics GET request" do

  before do
    stub_credentials = {
      v1: {
        public_api_key: 'public_api_key',
        private_api_key: 'private_api_key',
      }
    }

    allow(Rails.application.credentials).to receive(:marvel_api).and_return(stub_credentials)
  end

  it 'accepts "marvel" as a provider' do
    stub_comics_get_with

    get '/api/v1/comics?provider=marvel'

    expect(response.status).to eq(200)
  end

  it 'accepts an offset and limit via query params' do
    stub_comics_get_with(
      {
        query_params: { "offset": "15", "limit": "30" },
      })

    get '/api/v1/comics?provider=marvel&offset=15&limit=30'

    expect(response.status).to eq(200)
  end

  it 'has a default offset and limit' do
    stub_comics_get_with(
      {
        query_params: { "offset": "0", "limit": "15" },
      })

    get '/api/v1/comics?provider=marvel'

    expect(response.status).to eq(200)
  end

  it 'forwards the marvel response' do
    stub_message = { "message" => "stub" }

    stub_comics_get_with(
      {
        body_response: stub_message
      })

    get '/api/v1/comics?provider=marvel'

    expect(json_response_body).to eq(stub_message)
  end
end

def stub_comics_get_with(query_params: {}, status_code: 200, body_response: nil)
  stub_request(:get, "https://gateway.marvel.com/v1/public/comics")
    .with(
      query: hash_including(query_params),
    )
    .to_return(
      status: status_code,
      body: JSON.generate(body_response),
      headers: {}
    )
end

def json_response_body
  JSON.parse(response.body)["body"]
end